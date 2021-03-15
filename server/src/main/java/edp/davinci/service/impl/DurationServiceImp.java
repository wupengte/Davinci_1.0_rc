package edp.davinci.service.impl;

import edp.davinci.dao.DavinciStaticDurationMapper;
import edp.davinci.model.DavinciStaticDuration;
import edp.davinci.model.User;
import edp.davinci.service.DurationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DurationServiceImp implements DurationService {

    @Autowired
    private DavinciStaticDurationMapper davinciStaticDurationMapper;


    @Override
    public List<DavinciStaticDuration> getCurDur(User user) {
        return davinciStaticDurationMapper.selCurDurationByName(user.getId());
    }

    @Override
    public float selSumTimeByName(User user) {
        return davinciStaticDurationMapper.selSumTimeByName(user.getUsername());
    }
}

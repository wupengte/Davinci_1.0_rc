package edp.davinci.service.impl;

import edp.davinci.dao.DavinciStaticDurationMapper;
import edp.davinci.dto.staticDto.DurationInfo;
import edp.davinci.model.User;
import edp.davinci.service.DurationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DurationServiceImp implements DurationService {

    @Autowired
    private DavinciStaticDurationMapper davinciStaticDurationMapper;


    @Override
    public DurationInfo getCurDur(User user) {
        return davinciStaticDurationMapper.selCurDurationByName(user.getId());
    }
}

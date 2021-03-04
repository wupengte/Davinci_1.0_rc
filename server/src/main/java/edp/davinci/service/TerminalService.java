package edp.davinci.service;

import edp.davinci.model.DavinciStaticTerminal;
import edp.davinci.model.User;

import java.util.List;

public interface TerminalService {
    List<DavinciStaticTerminal> selTerminalByUser(User user);
}
